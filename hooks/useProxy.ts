import { useState, useRef, useEffect } from "react"

const SNAPSHOT = Symbol();
const LISTENERS = Symbol();

export const proxy = () => {
  const listeners = new Set();
  let lastSnapshot;
  
  const createSnapshot = (target) => {
    if (!lastSnapshot) {
      lastSnapshot = Object.freeze({ ...target });
    }
    return lastSnapshot;
  };
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === SNAPSHOT) {
          return createSnapshot(target);
        }
        if (prop === LISTENERS) {
          return listeners;
        }
        return target[prop];
      },
      set(target, prop, value) {
        lastSnapshot = undefined;
        target[prop] = value;
        listeners.forEach((l) => l());
      }
    }
  );
};

const snapshot = (proxy) => proxy[SNAPSHOT];

const subscribe = (proxy, callback) => {
  proxy[LISTENERS].add(callback);
  return () => proxy[LISTENERS].delete(callback);
};

export const useSnapshot = (proxy) => {
  const [value, setValue] = useState(snapshot(proxy));
  const used = new Set();
  const lastValue = useRef();
  const lastUsed = useRef();
  useEffect(() => {
    lastValue.current = value;
    lastUsed.current = used;
  });
  useEffect(() => {
    const callback = () => {
      const nextValue = snapshot(proxy);
      const value = lastValue.current;
      const used = lastUsed.current;
      if (
        used.size &&
        [...used].every((prop) => value[prop] === nextValue[prop])
      ) {
        // not changed
      } else {
        setValue(nextValue);
      }
    };
    const unsubscribe = subscribe(proxy, callback);
    callback();
    return unsubscribe;
  }, [proxy]);
  return new Proxy(value, {
    get(target, prop) {
      used.add(prop);
      return target[prop];
    }
  });
};
