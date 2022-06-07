import React from 'react';

export function ModellingTheBrain() {
    return (
        <div>
            <div className='para'>1. The first level of consciousness should be simple instructions for actions to be
                performed (also triggers for the actions, and rewards and perils), no feedback loops of any kind, and
                cost functions will not evaluated. We will need to introduce chaos, not in the general meaning of the
                term, but randomness, so that better mutations survive
                <br/>
                &nbsp; a. If we talk about survival, then we’ll need to define perils too, but I write this in a side note, for
                it has to be a property of the environment rather than the organism itself, also the rewards and
                triggers as well

            </div>
            <div className='para'>
                2. The second level must include feedback loops, such that in the process of doing a task, due to the
                randomness, if a reward is received with a lower cost function, the event is recorded and new
                associations surrounding the reward must be built, on sufficient reinforcement, this should become the
                default way of doing the task
            </div>
            <div className='para'> 3. The third level will need to have VM’s that will be stripped down versions of the
                organism itself,
                embedded inside the organism, that will imagine a limited amount of possibilities, and evaluate the cost
                functions beforehand
            </div>
            <div className='para'>
                4. The fourth level will evaluate the efficiency of the VM’s, and create better VM’s, stop when further
                introspection leads to the same results, or consumes resources in excess
            </div>
        </div>
    );
}
