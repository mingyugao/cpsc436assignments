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
  document.body.style.overflow = isOpen ? 'hidden' : 'unset';

  return isOpen
    ? (
      <div className="edit-post-modal">
        <div>
          <div>Edit post</div>
          <input
            disabled={!isEditable}
            type="text"
            value={title}
            onChange={e => onChangeTitle(e.target.value)}
          />
          <textarea
            disabled={!isEditable}
            cols="40"
            rows="10"
            value={content}
            onChange={e => onChangeContent(e.target.value)}
          ></textarea>
          <div>
            <button onClick={() => closeEditPostModal()}>CANCEL</button>
            <button
              disabled={!isEditable || !title || !content}
              onClick={() => editPostRequest({ id, title, content })}
            >SUBMIT</button>
          </div>
        </div>
      </div>
    )
    : '';
}

export default connect(
  mapStateToPropsEditPostModal,
  mapDispatchToPropsEditPostModal
)(EditPostModal);
