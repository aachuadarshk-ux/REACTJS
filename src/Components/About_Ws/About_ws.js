import React from 'react'
import img2 from '../Images/IMG.AD.13';
import './About_ws.css';

export default function About_ws() {
  return (
    <div>

        <div className="container-fluid data-aos=zoom-out">
            <div className="row">
                <div className="col-md-6 mt-5">
                <img src={img2} className="img-fluid" alt=''/>
                </div>
            <div className="col-md-6 mt-5">
                
              <p className="dl">William Shakespeare (1564–1616) is widely regarded as the greatest writer in the English language and one of the most influential playwrights and poets in history. Though he lived over 400 years ago, his works continue to shape literature, theatre, and the English language itself.

Shakespeare wrote approximately 39 plays, 154 sonnets, and several narrative poems. His plays are typically divided into three categories: tragedies (*Hamlet*, *Macbeth*, *Othello*), comedies (*A Midsummer Night’s Dream*, *Twelfth Night*, *As You Like It*), and histories (*Henry V*, *Richard III*). These works explore timeless themes like love, power, betrayal, ambition, and the human condition—making them relevant across centuries.

Many of Shakespeare’s workThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            </div>
        </div>


    </div>
  )
}
