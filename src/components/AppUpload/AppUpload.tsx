/**
 * @Author JohnLi
 * @Date 2018/4/13 19:35
 */
import React, { Component } from 'react';
import './AppUpload.css';

interface AppUploadStates {
  shape?: string;
}
class AppUpload extends Component<AppUploadStates> {
  previewImage;
  fileInput;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className={'image-upload'} onClick={(event) => this.selectFiles(event)}>
          <img className={'preview'} ref={ele => this.previewImage = ele}/>
          <input name="name" type="file" accept="accept" id="file" onChange={(event) => { this.fileChange(event); }} ref={ele => this.fileInput = ele}/>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
  //  srfdb
  }
  fileChange (event) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      file.objectURL = window.URL.createObjectURL(file);
      this.previewImage.src = file.objectURL;
    }
  }
  selectFiles (event) {
    this.fileInput.change();
  }
}

export default AppUpload;