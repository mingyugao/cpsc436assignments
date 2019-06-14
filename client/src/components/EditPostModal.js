import React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToPropsEditPostModal,
  mapDispatchToPropsEditPostModal
} from '../reduxMaps';

const EditPostModal = ({
  isOpen,
  id,
  title,
  content,
  isEditable,
  onChangeTitle,
  onChangeContent,
  closeEditPostModal,
  editPostRequest
}) => {
  return isOpen
    ? (
      <div className="edit-post-modal">
        <input
          disabled={!isEditable}
          type="text"
          value={title}
          onChange={e => onChangeTitle(e.target.value)}
        />
        <input
          disabled={!isEditable}
          type="text"
          value={content}
          onChange={e => onChangeContent(e.target.value)}
        />
        <button onClick={() => closeEditPostModal()}>Cancel</button>
        <input
          disabled={!isEditable}
          type="button"
          value="Submit"
          onClick={() => editPostRequest({ id, title, content })}
        />
      </div>
    )
    : '';
}

export default connect(
  mapStateToPropsEditPostModal,
  mapDispatchToPropsEditPostModal
)(EditPostModal);
