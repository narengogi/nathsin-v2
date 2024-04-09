import React from 'react';

export function abstractions() {
  return (
    <div>
      <div className='para'>
      At every level, any interaction between two entities is a tussle to establish an uneasy equilibrium. And by entities I refer to sets of rules that appear to work together to preserve their own underlying abstractions.
Rationally all rules are built on top of binary true and false. So, how does complex logic evolve out of simple boolean? This is an already well understood concept which we see best explained with logic gates.
      </div>
      <div className='para'>
      So how would you model an environment in which the rules continue evolving and forming stronger entities? Rules that don’t contradict each other, rules being broken and evolving better abstractions through mutations. What is something that life simulations get wrong? The reward should be survival, that should be the core mechanism for evolution. The concept of survival can be bastardised in expression. An entity can survive by being strong by itself, and/or also by having other entities that have contradictions, but fight together for better chances of survival.
      </div>
      <div className='para'>
      Now, how do you make the entities reason about themselves and continue expanding beyond the environment that they were incubated in? It’s pretty straightforward. The key mutation is to allow for picking up rules from the environment. The rules also interact with each other inside the entity, dictating how the entity performs.
      </div>
    </div>
  );
}
