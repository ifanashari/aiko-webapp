import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

class RadioButton extends Component {
    constructor(props){
        super(props)

        this.activeRadioButton.bind(this)
    }

    tripActiveRadio(){
        if(this.props.form){
            this.props.onUpdateNewTaskListType()
        } else{
            this.props.onUpdateTaskListCategoryType()
        }
    }

    activeRadioButton(type){
        let tmpResultChecker = false
        let tmpResult = ''

        if(this.props.form){
            if(this.props.taskList.newTaskList.type === type){
                tmpResultChecker = true
            } else {
                tmpResultChecker = false
            }
        } else {
            if(this.props.taskList.taskListCategory === type){
                tmpResultChecker = true
            } else {
                tmpResultChecker = false
            }
        }

        if(tmpResultChecker){
            tmpResult = `radio-control-${type}-active`
        } else{
            tmpResult = ''
        }

        return tmpResult
    }

    render() {
        return (
            <div>
                <div className={
                    classNames(
                            'radio-control mx-auto',
                            `radio-control-${this.props.type}`,
                            this.activeRadioButton(this.props.type)
                        )
                    }
                    onClick={this.tripActiveRadio.bind(this)}
                    />
                <span className="font-weight-bold mt-3">{this.props.text}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        taskList: state.taskList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton)