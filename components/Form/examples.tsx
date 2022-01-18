import React, { Fragment, FormEvent } from 'react'
import { ExampleBase } from '@/components/ExampleBase';
import { StarIcon } from '@radix-ui/react-icons'

type FormInputFields = Partial<{
    firstName?: string; 
    lastName?: string; 
    iceCreamFlavor?: 'chocoloate' | 'vanilla' | 'strawberry' | 'neopolitan';
    sprinkles: boolean; 
    cherry: boolean;
    hotFudge: boolean; 
}>; 

const stateFactory = (): FormInputFields => {
    const initState: FormInputFields = {
        firstName: undefined,
        lastName: undefined,
        iceCreamFlavor: undefined,
        sprinkles: false,
        cherry: false,
        hotFudge: false
    };
    return initState; 
}

class FormInstance extends React.Component {
    state = {...stateFactory()};

    componentDidMount() {
        if (localStorage) {
          const formDataFromLocalStorage = localStorage.getItem("formData");
          if (formDataFromLocalStorage) {
            const formData = JSON.parse(formDataFromLocalStorage);
            this.setState({ ...formData });
          }
        }
    } 
  
    handleUpdateState = (field = "", value = "") => {
        this.setState({ [field]: value }, () => {
        if (localStorage) {
            localStorage.setItem("formData", JSON.stringify(this.state));
        }
        });
    };
  
    render() {
        const { firstName, lastName, iceCreamFlavor, sprinkles, cherry, hotFudge } = this.state;

      return (
        <Fragment>
            <form>
            <div className="row">
                <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(event: FormEvent<HTMLInputElement>) =>
                        this.handleUpdateState("firstName", event.currentTarget.value)
                    }
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-sm-6">
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(event: FormEvent<HTMLInputElement>) =>
                        this.handleUpdateState("lastName", event.currentTarget.value)
                    }
                    className="form-control"
                    />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <div className="mb-3">
                    <label className="form-label">Favorite Ice Cream Flavor</label>
                    <select
                    className="form-select"
                    value={iceCreamFlavor}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        this.handleUpdateState("iceCreamFlavor", event.currentTarget.value)
                    }
                    >
                    <option value="chocolate">Chocolate</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="neopolitan">Neopolitan</option>
                    </select>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <div className="mb-5">
                    <label className="form-label">Toppings</label>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="sprinkles"
                        checked={sprinkles}
                        onChange={(event: FormEvent<HTMLInputElement>) =>
                        this.handleUpdateState("sprinkles", event.currentTarget.value)
                        }
                    />
                    <label className="form-check-label">Sprinkles</label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="cherry"
                        checked={cherry}
                        onChange={(event: FormEvent<HTMLInputElement>) =>
                        this.handleUpdateState("cherry", event.currentTarget.value)
                        }
                    />
                    <label className="form-check-label">Cherry</label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="hotFudge"
                        checked={hotFudge}
                        onChange={(event: FormEvent<HTMLInputElement>) =>
                            this.handleUpdateState("hotFudge", event.currentTarget.value)
                        }
                    />
                        <label className="form-check-label">
                            Hot Fudge
                        </label>
                    </div>
                </div>
                </div>
            </div>
                <button 
                    className="btn btn-primary" 
                    style={{ marginRight: "10px" }}
                >
                    Submit
                </button>
                <button
                    className="btn btn-light"
                    type="button"
                >
                    Reset Form
                </button>
            </form>
        </Fragment>
        )
    }
}

const ExampleForm = () =>  (
    <ExampleBase
        icon={<StarIcon />}
        heading='Form'
        description='Describe form here'
        component={<FormInstance />}
        controls={[]}
    />
);

export default ExampleForm
