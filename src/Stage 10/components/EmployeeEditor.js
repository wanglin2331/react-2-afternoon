import React, {Component} from 'react';

class EmployeeEditor extends Component {
constructor(){
    super();

    this.state={
        employee: null,
        originalEmployee: null,
        notModified: true
    }
    this.save=this.save.bind(this);
    this.cancel=this.cancel.bind(this);
    
    }

    componentWillReceiveProps(props) {
        this.setState({ employee: Object.assign({}, props.selected), originalEmployee: props.selected });
      }
    
    handleChange(prop, val){
        var employeeCopy = Object.assign({},this.state.employee)
        employeeCopy[prop]=val;
        this.setState({employee: employeeCopy})

        {this.state.notModified
            ? this.setState({notModified: false})
            : this.setState({notModified: false})
        }
    }

    save() {
        this.state.originalEmployee.updateName(this.state.employee.name);
        this.state.originalEmployee.updatePhone(this.state.employee.phone);
        this.state.originalEmployee.updateTitle(this.state.employee.title);
        this.setState({ notModified: true });
        this.props.refreshList();
    }

    cancel() {
        var employeeCopy = Object.assign({}, this.state.originalEmployee);
        this.setState({employee: employeeCopy, notModified: true})
    }


    render(){
        return(
        <div>
            {
            this.state.employee
            ?    
            <div>
            <p  id="employeeTitle">{ this.state.originalEmployee.name }</p>
            <button     id="saveBtn"
                        disabled = {this.state.notModified}
                        className="confirmationButton"
                        onClick={this.save}>Save
            </button>
            <button className="neutralButton"
                        disabled = {this.state.notModified}
                        onClick = {this.cancel}>Cancel
            </button>

            <span className="placeholderText">name</span>
            <input  className="materialInput"
                    onChange={(e)=>{this.handleChange('name',e.target.value)}}
                    value = {this.state.employee.name}
                    ></input>
            <span className="placeholderText">phone</span>
            <input  className="materialInput"
                    onChange={(e)=>{this.handleChange('phone',e.target.value)}}
                    value = {this.state.employee.phone}
                    ></input>
            <span className="placeholderText">title</span>
            <input  className="materialInput"
                    onChange={(e)=>{this.handleChange('title',e.target.value)}}
                    value = {this.state.employee.title}></input>
            </div>
            :
            <p id="noEmployee">'no employee selected'</p>
            }
        </div>
        )
    
    }




}

export default EmployeeEditor;