import React, { useState } from 'react';
import './PagesList.scss';
import Button from '../Button/Button';

function PagesList({ arrayPages, handleChangePage }) {
    const [position, setPosition] = useState(0);
    const next = () => {
        let newPosition = position;
        if (newPosition < arrayPages.length - 1) {
            newPosition++;
            setPosition(newPosition);
        }
        // console.log('position next= ' + newPosition);
    }
    const previous = () => {
        let newPosition = position;
        if (newPosition > 0) {
            newPosition--;
            setPosition(newPosition);
        }
        // console.log('position previous= ' + newPosition);
    }
    return (
        <div className='pagesList'>
            <button
                onClick={previous}
                style={{ height: 20 + 'px', width: 30 + 'px' }}
            >&lt;&lt;</button>
            {arrayPages.map((dt, i, arr) => {
                let x = (position + 1) / (arr.length - 1);
                let y = Math.floor(x) + Math.floor(x) * ((position + 1) % (arr.length - 1));
                // console.log('x= ' + x);
                // console.log('y= ' + y);
                let newArr = [];
                const button = <Button
                    handleChangePage={handleChangePage}
                    key={i}
                    value={i + 1}
                    text={dt}
                    height='20px'
                    width='20px'
                />
                const currentPage = <Button
                    handleChangePage={handleChangePage}
                    key={i}
                    value={i + 1}
                    text={<strong>{dt}</strong>}
                    height='30px'
                    width='30px'
                />
                const dots = <strong key='1000'>.....</strong>
                if (arr.length >= 12) {
                    if (position <= 3 && i <= 4) {
                        i === position && newArr.push(currentPage);
                        i !== position && newArr.push(button);
                    }
                    if (position >= 4) {
                        i === 0 && newArr.push(button);
                        i === 1 && newArr.push(dots);
                        if (i - position >= -2 - y && i - position <= 2 - y) {
                            i === position && newArr.push(currentPage);
                            i !== position && newArr.push(button);
                        }
                    }
                }
                else {
                    newArr.push(button);
                }
                return newArr;
            })}
            <strong>&nbsp;of&nbsp;</strong>
            <Button
                handleChangePage={handleChangePage}
                value={arrayPages.length}
                text={arrayPages.length}
                height='20px'
                width='20px'
            />
            <button
                onClick={next}
                style={{ height: 20 + 'px', width: 30 + 'px' }}
            >&gt;&gt;</button>
        </div>
    )
}

export default PagesList
