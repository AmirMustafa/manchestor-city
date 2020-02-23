import React, { Component } from "react";
import { firebase, firebasePlayers } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import CircularProgress from "@material-ui/core/CircularProgress";
class Fileuploader extends Component {
  state = {
    name: "",
    isUploading: false,
    fileURL: ""
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      });
    }
    return null;
  }

  handleUploadStart = () => {
    this.setState({
      isUploading: true
    });
  };

  handleUploadError = () => {
    this.setState({
      isUploading: false
    });
  };

  handleUploadSuccess = filename => {
    console.log(filename); // image name
    this.setState({
      name: filename,
      isUploading: false
    });

    // firebase provides only name, we need to get download image URL
    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ fileURL: url });
      });

    this.props.filename(filename);
  };

  // resetting state on clicking remove button
  uploadAgain = () => {
    this.setState({
      name: "",
      isUploading: false,
      fileURL: ""
    });

    this.props.resetImage();
  };
  render() {
    return (
      <div>
        {/* Insert case */}
        {!this.state.fileURL ? (
          <div>
            <div className="label_inputs">{this.props.tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref(this.props.dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        ) : null}
        {this.state.isUploading ? (
          <div
            className="progress"
            style={{ textAlign: "center", margin: "30px 0" }}
          >
            <CircularProgress style={{ color: "#99c6e9" }} thickness={7} />
          </div>
        ) : null}

        {/* When image is Uploaded */}
        {this.state.fileURL ? (
          <div className="image_upload_container">
            <img
              style={{
                width: "100%"
              }}
              src={this.state.fileURL}
              alt={this.state.name}
            />
            <div className="remove" onClick={() => this.uploadAgain()}>
              Remove
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fileuploader;
