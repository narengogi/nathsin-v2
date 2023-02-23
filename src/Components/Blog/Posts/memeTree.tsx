import React from 'react';

export function memeTree() {
  return (
    <div>
      <div className='para'>
        Systems that can be described with (relatively) fewer symbols are easier to replicate, but at the same time, their transmission can be blocked equally easily. Let's put this on a scale, and
        call it the meme-score, or m-score for short.
      </div>
      <br />
      <div className='para'>There are two important consequences that arise from this:</div>
      <div className='para'>
        1. Systems that are corollaries to other systems and vice-versa (those that support other systems) will have a better m-score. If a system (S1) is a corollary to another (S2), it generally
        implies that S1 can be described using fewer symbols than S2, assuming that the symbols are from the same set (ex: numbers, alphabets)
      </div>
      <div className='para'>
        2. Larger systems become deceptively hard to put a check to. They hold within themselves sub-systems that contradict each other. Most large systems continue replicating with inertia. They
        survive not because they've cracked replication, but because they manage to survive within a collection of systems. But at the same time, the larger systems actively benefit from this
        parasitic (Excuse me!) behaviour.
      </div>
      <br />
      <div className='para'>
        Having established these two consequences, we can now proceed to define what would make for a stable and viral system:
        <div>"A set of symbols that can be used to describe any other set of symbols"</div>
      </div>
      <br />
      <div className='para'>
        Take for example a human in a society, "A set of symbols that can be used to describe any other set of symbols", is just the persons philosophy on life. If a person subscribes wholly to a line
        of philosophy and actively adjusts all their interactions and behaviours to conform to it, their m-score will be high and will hardly fluctuate once stable.
      </div>
    </div>
  );
}
