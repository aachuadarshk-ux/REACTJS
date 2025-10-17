import React from 'react'
import img11 from '../Images/IMG1.125';
import '../WS_aboutbooks/Ws.css';

export default function Ws() {
  return (
    <div>

         <div className="container-fluid mt-5 pt-3  data-aos=zoom-out-up">
            <div className="row">
                <h2 className="text-center mb-5">William Shakespeare About Books ||</h2>
                <div className="col-lg-6">
                    <img src={img11} className="img-fluid" alt=''/>
                </div>
                <div className="col-lg-6 tp">
                    <h6 className="tp">William Shakespeare !</h6>
                    <p className="text-justify">

William Shakespeare (1564–1616) is widely regarded as the greatest writer in the English language and one of the most influential playwrights and poets in history. Though he lived over 400 years ago, his works continue to shape literature, theatre, and the English language itself.

Shakespeare wrote approximately 39 plays, 154 sonnets, and several narrative poems. His plays are typically divided into three categories: tragedies (*Hamlet*, *Macbeth*, *Othello*), comedies (*A Midsummer Night’s Dream*, *Twelfth Night*, *As You Like It*), and histories (*Henry V*, *Richard III*). These works explore timeless themes like love, power, betrayal, ambition, and the human condition—making them relevant across centuries.

Many of Shakespeare’s works were published posthumously in 1623 as a collection known as the **First Folio**, one of the most valuable and important books in the literary world. Today, countless editions of his plays and poems are published in various formats, ranging from scholarly annotated versions to simplified adaptations for children.

Shakespeare’s language is known for its beauty, complexity, and inventiveness. 
</p>
                </div>
            </div>
        </div> 

    </div>
  )
}

