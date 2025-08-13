import React from 'react'

// Class component named SearchInput
class SearchInput extends React.Component {

    // Constructor method to initialize state and bind methods if needed
    constructor (props) {
        super(props); // Calling parent class constructor

        // Component's local state with a default search entry
        this.state = {
            entry: 'Hi'
        };

        // If using traditional function syntax (not arrow functions), 
        // you must bind methods like this:
        // this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    // Modern arrow function approach auto-binds 'this' correctly
    onSubmitForm = (e) => {
        e.preventDefault(); // Prevents page reload on form submit

        // Calls the function passed from the parent component and sends the current input value
        this.props.onSearchSubmit(this.state.entry);
    }

    // Render method defines what the UI looks like
    render() {
        return (
            <div className='pt-1.5'> {/* Padding top */}
                <form onSubmit={this.onSubmitForm} className="max-w-md mx-auto">
                    {/* Hidden label for accessibility */}
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>

                    <div className="relative">
                        {/* Icon inside the input field - purely visual */}
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 20 20"
                            >
                                <path 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" 
                                />
                            </svg>
                        </div>

                        {/* Search input field */}
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 
                                       rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                            // On change, update the `entry` in state and convert it to uppercase
                            onChange={(event) => this.setState({ entry: event.target.value.toUpperCase() })}
                            value={this.state.entry}
                        />

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                                       focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                                       rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                                       dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

// Exporting the component so it can be used in other files
export default SearchInput
