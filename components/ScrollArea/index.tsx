import React from 'react'

import { Box } from '../Box'
import { Flex } from '../Flex'

type Point = {
  x: number;
  y: number;
};

type Vector = {
  dx: number;
  dy: number;
};

type ScrollAreaProps = {
  children: any;
};

const useLayoutEffect = Boolean(globalThis?.document) ? React.useLayoutEffect : () => {}

export const ScrollArea = (props: ScrollAreaProps) => {
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const frameUpdateRef = React.useRef<number>(0);
  const lastDragPos = React.useRef<Point>({ x: 0, y: 0 });
  const originalBodyPointerEvents = React.useRef(
    typeof document === 'undefined' ? '' : document.body.style.pointerEvents
  );

  useLayoutEffect(() => {
    const wrapperEl = wrapperRef.current;
    const contentEl = contentRef.current;
    const thumbEl = thumbRef.current;

    /** The total height of the scrollable content */
    let totalHeight = 0;
    /** The visible height of the scrollable content */
    let visibleHeight = 0;
    /** The current scrollTop */
    let scrollPos = 0;
    /** How far we've scrolled on a scale of 0 to 1 */
    let scrollPosRatio = 0;
    /** The ratio of scroll of visible area to total area on a scale of 0 to 1: */
    let visibleToTotalRatio = 0;

    /** Keeps the thumb the right size and in the right position */
    function updateThumb() {
        if (contentEl && thumbEl && wrapperEl) {
            totalHeight = contentEl.scrollHeight;
            visibleHeight = contentEl.clientHeight;
            scrollPos = contentEl.scrollTop;
            scrollPosRatio = scrollPos / totalHeight;
            visibleToTotalRatio = visibleHeight / totalHeight;

            if (visibleToTotalRatio >= 1) {
                thumbEl.style.height = '0px';
            } else {
                thumbEl.style.top = scrollPosRatio * 100 + '%';
                thumbEl.style.height = Math.max(visibleToTotalRatio * 100, 10) + '%';
            }
        }
      frameUpdateRef.current = requestAnimationFrame(updateThumb);
    }

    function onDragStart(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        e.preventDefault()
        lastDragPos.current = { 
            x: e.clientX, 
            y: e.clientY 
        }
        wrapperEl.classList.add('modulz-is-dragging')
        window.addEventListener('mousemove', onDragMove)
        window.addEventListener('mouseup', onDragEnd)
        originalBodyPointerEvents.current = document.body.style.pointerEvents
        document.body.style.pointerEvents = 'none'
      }
    }

    /** Calculates the mouse move to scroll amount and applies it */
    function onDragMove(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        // How much did we move?
        const delta: Vector = {
          dx: lastDragPos.current.x - e.clientX,
          dy: lastDragPos.current.y - e.clientY,
        };
        // Cache the new mouse position:
        lastDragPos.current = { x: e.clientX, y: e.clientY };

        // Update the scroll position of the content, amplifying the mouse movement by the amount of content hidden:
        contentEl.scrollTop -= Math.round(delta.dy / visibleToTotalRatio);
      }
    }

    /** Unwires the mouse listeners and pops the dragging class off the wrapper */
    function onDragEnd(e: MouseEvent) {
      if (contentEl && thumbEl && wrapperEl) {
        // Add the dragging class to keep the thumb visible
        wrapperEl.classList.remove('modulz-is-dragging');
        // Get rid of our drag move and end event listeners:
        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        // Restore body pointer events style
        document.body.style.pointerEvents = originalBodyPointerEvents.current;
      }
    }

    // Listen for mousedown on the thumb:
    thumbRef.current?.addEventListener('mousedown', onDragStart);
    // Start updates every frame:
    frameUpdateRef.current = requestAnimationFrame(updateThumb);

    return () => {
        cancelAnimationFrame(frameUpdateRef.current);
        thumbEl?.removeEventListener('mousedown', onDragStart);
        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
    };
  }, []);

  return (
    <Flex
        ref={wrapperRef}
        css={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            minHeight: 0,
            maxHeight: '100%',
            position: 'relative',
            '&:hover': {
                '[data-scroll-thumb]': {
                    opacity: 1,
                },
            },
            '&.modulz-is-dragging': {
                pointerEvents: 'auto',
                '[data-scroll-content]': {
                    pointerEvents: 'none',
                },
                '[data-scroll-thumb]': {
                    opacity: 1,
                },
            },
        }}
    >
     
      <Box
        data-scroll-content
        ref={contentRef}
        css={{
            backgroundColor: 'transparent',
            position: 'relative',
            overflowY: 'scroll',
            overflowX: 'scroll',
            scrollbarWidth: 'none',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'space-between',
            flexWrap: 'nowrap',
            border: '$2 solid $accentSolid',
            br: '$2',
            '&::-webkit-scrollbar': { 
                display: 'none' 
            }
        }}
        style={{
            WebkitOverflowScrolling: 'touch',
        }}
      >
        {props.children}
      </Box>
      <Box
        ref={thumbRef}
        data-scroll-thumb
        css={{
            opacity: 0,
            zIndex: 10,
            position: 'absolute',
            top: 0,
            right: 0,
            width: '2px',
            bc: '$accentSolid',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '2px',
                left: '1.5px',
                width: 'calc(100% - 5px)',
                height: 'calc(100% - 5px)',
                backgroundColor: '$accentSolid',
                borderRadius: '$1',
            },
        }}
      />
    </Flex>
  );
};