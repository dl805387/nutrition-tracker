import React from 'react';

function Form() {
    return(
        <form>
            <input type="text" className="food-input" />
            <button className="food-button" type="submit"></button>
            {/*<div class="select">*/}
                <select name="foods" className="filter-food">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            {/*</div>*/}
        </form>
    );
}

export default Form;