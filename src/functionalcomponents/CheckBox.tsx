import React, {ChangeEvent} from 'react';

type UniversalCheckBoxPropsType = {
    callBack:(checkedValue:boolean)=>void
    checked:boolean
}

export const UniversalCheckBox = (props:UniversalCheckBoxPropsType) => {
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }
    return (
        <div>
            <input type="checkbox" onChange={onChangeHandler} checked={props.checked}/>
        </div>
    );
};
