import {Component} from 'react'
import {FiEdit, FiSave} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

class PersonType extends Component {
  state = {nameInput: '', emailInput: '', roleInput: ''}

  changeInputValue = event => {
    this.setState({nameInput: event.target.value})
  }

  changeEmail = event => {
    this.setState({emailInput: event.target.value})
  }

  changeRole = event => {
    this.setState({roleInput: event.target.value})
  }

  render() {
    const {
      personDetails,
      onClickDelete,
      onClickEdit,
      onCheckSelect,
      saveDetails,
    } = this.props
    const {nameInput, emailInput, roleInput} = this.state
    const {name, email, role, id, isChecked, isEdited} = personDetails
    const activeSelect = isChecked ? 'active-check-box' : 'check-box'

    const deleteItem = () => {
      onClickDelete(id)
    }

    const changeSelectItem = () => {
      onCheckSelect(id)
    }

    const editItem = () => {
      onClickEdit(id)
    }

    const saveItem = () => {
      const userDetails = {nameInput, emailInput, roleInput, id}
      console.log(id)
      console.log(userDetails)
      saveDetails(userDetails)
    }

    return (
      <>
        <div className={`person-details ${activeSelect}`}>
          <input
            type="checkbox"
            onClick={changeSelectItem}
            value={name}
            id={id}
            name="multiple-select"
            checked={isChecked}
          />
          {isEdited ? (
            <input
              type="text"
              onChange={this.changeInputValue}
              value={nameInput}
            />
          ) : (
            <p className="detail-of-person">{name}</p>
          )}
          {isEdited ? (
            <input
              type="email"
              onChange={this.changeEmail}
              value={emailInput}
            />
          ) : (
            <p className="detail-of-person email">{email}</p>
          )}
          {isEdited ? (
            <input type="text" value={roleInput} onChange={this.changeRole} />
          ) : (
            <p className="detail-of-person role">{role}</p>
          )}

          <div className="action-container">
            {isEdited ? (
              <button type="button" onClick={saveItem} className="save-button">
                <FiSave className="icon" />
              </button>
            ) : (
              <button type="button" onClick={editItem} className="edit-button">
                <FiEdit className="icon" />
              </button>
            )}
            <button type="button" onClick={deleteItem} className="delete-button">
              <AiOutlineDelete className="icon" />
            </button>
          </div>
        </div>
        <hr/>
      </>
    )
  }
}

export default PersonType
