import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="mockup-window border my-3 bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">1. How will you improve the performance of a React Application?</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.In most cases, this re-rendering shouldn't cause performance issues, and we shouldn't notice any lag in our application. However, if the unaffected component renders an expensive computation and we notice performance issues, then we should optimize our React application.By prioritizing the resources which are needed to be loaded first and lazyloading the rest of code or resources with techniques such as code-splitting. There might be higher chances when we are duplicating things more unnecessarily or unintentionally. We have to make sure to get them analyzed and sort out the size of our bundled code.</div>
            </div>
            <div className="mockup-window my-6 border bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">2. What are the different ways to manage a state in a React application?</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.We can use local, global, server, URL methos to manage the state.Local state is data we manage in one or another component.Global state is data we manage across multiple components.To manage it, however, we should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</div>
            </div>

            <div className="mockup-window my-6 border bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">3. How does prototypical inheritance work?</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties.</div>
            </div>


            <div className="mockup-window my-6 border bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">4. Why you do not set the state directly in React</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">If we update it directly it may just replace the update we made.When we directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling the method will only return the present value.We will lose control of the state across all components.</div>
            </div>


            <div className="mockup-window my-6 border bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">
                    {
                        `
                            const inventory = [
                            {name: 'Apples', quantity: 2 },
                            {name: 'Bananas', quantity: 0 },
                            {name: 'Cherrry', quantity: 0 },
                            {name: 'Cherries', quantity: 5 }
                            ];
                            const input = 'che'

                            const output = inventory.filter(item => item.name?.toLowerCase().includes(input.toLowerCase()))
                            console.log(output)
                        `
                    }
                </div>
            </div>

            <div className="mockup-window my-6 border bg-base-300">
                <div className="flex justify-start px-4 text-xl py-2 bg-base-200">6. What is a unit test? Why should write unit tests?</div>
                <div className="flex justify-start px-4 py-2 bg-base-200">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</div>
            </div>

        </div>
    );
};

export default Blogs;