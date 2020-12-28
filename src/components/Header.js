import React from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';


const Header = () => {

    return (
        <div className="header">
            <header>
                <h1>
                    <span>Rock</span>
                    <span>Paper</span>
                    <span>Scissors</span>
                </h1>
                <div className="header__score__container">
                    <h4>Score</h4>
                    <p className="header__score">12</p>
                </div>
            </header>

            <main>
                <button className="btn btn--paper">
                    <span>
                        <img src={paper} alt="paper icon" />
                    </span>
                    
                </button>

                <button className="btn btn--scissors">
                    <span>
                        <img src={scissors} alt="scissors icon" />
                    </span>                  
                </button>

                <button className="btn btn--rock">
                    <span>
                        <img src={rock} alt="rock icon" />
                    </span>
                </button>
            </main>
            
        </div>
    )
}

export default Header;