import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../components/MaterialUi";
import { BsPlusCircle } from "react-icons/bs";
import swal from 'sweetalert';
import Card from "./../components/Bcard";
import ModalComp from "./../components/Modal";
import { toast } from "react-toastify";
import Axios from "axios";

class Home2 extends Component {
  state = {
    datas: [],
    fotoInp: "",
    judulInp: "",
    captionInp: "",
    indexdelete: -1,
    indexedit: -1,
    EditData: {
      id: 0,
      foto: "",
      judul: "",
      caption: "",
    },
    modal: false,
    editmodal: false,
  };
  //*  cara pertama tanpa component
  //   renderCard = () => {
  //     const { classes } = this.props;

  //     return this.state.data.map((val, index) => {
  //       return (
  //         <div className="col-md-3" key={index}>
  //            <Card style={{ backgroundColor: "khaki" }} variant="outlined">
  //             <CardMedia
  //               className={classes.media}
  //               image={val.foto}
  //               title="Paella dish"
  //             />
  //             <CardContent>
  //               <Typography variant="h5" component="h2">
  //                 {val.judul}
  //               </Typography>

  //               <Typography variant="body2" color="textSecondary" component="p">
  //                 User1
  //                 <br />
  //                 {val.caption}
  //               </Typography>
  //             </CardContent>
  //             <CardActions>
  //               <IconButton className="heart">
  //                 <BsFillHeartFill />
  //               </IconButton>
  //               <IconButton className="share">
  //                 <BiPaperPlane />
  //               </IconButton>
  //             </CardActions>
  //           </Card>
  //         </div>
  //       );
  //     });
  //   };

  // * cara dengan component
  
  componentDidMount(){
    Axios.get(`http://localhost:5100/datas`)
      .then((res)=>{
        this.setState({datas: res.data});
      })
      .catch((err)=>{
        toast.error("Internal Server Error!")
      })
  }

  onFotoChange = (event)=>{
    this.setState({fotoInp: event.target.value})
  }

  onJudulChange = (event)=>{
    this.setState({judulInp: event.target.value})
  }

  onInputChange = (event)=>{
    this.setState({[event.target.name]: event.target.value});
  };

  onInputEditChange = (event)=>{
    let Editdata =  this.state.EditData;
    Editdata[event.target.name] =  event.target.value;
    this.setState({EditData: Editdata});
  };

  onAddClick=()=>{
    const{fotoInp, judulInp, captionInp, data} = this.state;
    if (fotoInp && judulInp && captionInp){
      let data = {
        foto: fotoInp,
        judul: judulInp,
        caption: captionInp,
      };
      Axios.post(`http://localhost:5100/datas`, data)
        .then((res1)=>{
          Axios.get(`http://localhost:5100/datas`)
            .then((res)=>{
              this.setState({
                datas: res.data,
                fotoInp: "",
                judulInp: "",
                captionInp: "",
                modal: false,
              })
            })
            .catch((err)=>{
              toast.error("Internal Server Error!")
            });
        })
        .catch((err)=>{
          console.log(err);
        });
    }else{
      toast.error("Input harus diisi semua!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  onAddModalClick = ()=>{
    this.setState({modal: true})
  };

  onAddCancelClick = ()=>{
    this.setState({modal: false})
  };
 
  // onDeleteClick = (index, id) => {
  //   this.setState({ indexdelete: index });
  //   swal({
  //     title: "Anda yakin?",
  //     text: "Data akan dihapus permanen",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //     .then((willDelete) => {
  //       if (willDelete) {
  //         swal("Data sudah dihapus", {
  //           icon: "success",
  //         });
  //         Axios.delete(`http://localhost:5100/datas/${id}`)
  //           .then((res1) => {
  //             console.log(res1);
  //             Axios.get(`http://localhost:5100/datas`)
  //               .then((res) => {
  //                 console.log(res);
  //                 this.setState({ datas: res.data, indexdelete: -1 });
  //               })
  //               .catch((err) => {
  //                 console.log(err);
  //                 toast.error("Internal Server Error");
  //               });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       } else {
  //         swal("Tidak jadi dihapus.");
  //       }
  //     });
  // };

  onDeleteClick = (id)=>{
    Axios.delete(`http://localhost:5100/datas/${id}`)
    .then((res1) => {
      console.log(res1);
      Axios.get(`http://localhost:5100/datas`)
        .then((res) => {
          console.log(res);
          this.setState({ datas: res.data, indexdelete: -1 });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Internal Server Error");
        });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onEditClick = (index)=>{
    let EditData = this.state.EditData;
    let datas = this.state.datas;
    EditData = {
      ...EditData,
      id: datas[index].id,
      foto: datas[index].foto,
      judul: datas[index].judul,
      caption: datas[index].caption,
    };
    this.setState({indexedit: index, EditData: EditData, editmodal: true});
  }

  onEditSaveClick = () => {
    // const { EditData, data, indexedit } = this.state;
    // const { foto, judul, caption } = EditData;
    let id = this.state.EditData.id;
    let foto = this.state.EditData.foto;
    let judul = this.state.EditData.judul;
    let caption = this.state.EditData.caption;
    if (foto && judul && caption && id){
      let data = {
        foto: foto,
        judul: judul,
        caption: caption,
      };
      Axios.patch(`http://localhost:5100/datas/${id}`, data)
        .then((res1)=>{
          console.log(res1.data);
          Axios.get(`http://localhost:5100/datas`)
            .then((res)=>{
              console.log(res)
              this.setState({
                datas: res.data,
                indexedit: -1,
                editmodal: false,
              });
              toast.success("Berhasil di edit!", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
            })
            .catch((err)=>{
              console.log(err);
              toast.error("Internal Server Error!");
            })
        })
        .catch((err)=>{
          console.log(err);
        })
    } else {
      this.setState({
        EditData: {
          foto: "",
          judul: "",
          caption: "",
        },
        indexedit: -1,
      });
      toast.error("Tidak jadi edit", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }

  onEditCancelClick = () => {
    this.setState({
      EditData: {
        foto: "",
        judul: "",
        caption: "",
      },
      indexedit: -1,
      editmodal: false,
    });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleEdit = () => {
    this.setState({ editmodal: !this.state.editmodal });
  };

  renderCard = () => {
    return this.state.datas.map((val, index) => {
        return (
          <div className="col-md-3" key={index}>
            <Card foto={val.foto} judul={val.judul} caption={val.caption} 
            Delete={()=> this.onDeleteClick(val.id)} Edit={()=> this.onEditClick(index)}/>
          </div>
        );
    });
  };

  render() {
    // const { classes } = this.props;
    return (
      <div>
        <ModalComp 
          isOpen={this.state.modal}
          toggle={this.toggle}
          title={"Tambah Card"}
          saveData={this.onAddClick}
          cancel={this.onAddCancelClick}
        >
          <input
            name="fotoInp"
            type="text"
            placeholder="Alamat foto"
            className="form-control my-2"
            value={this.state.fotoInp}
            onChange={this.onInputChange}
          />
          <input
            name="judulInp"
            type="text"
            placeholder="Masukkan judul"
            className="form-control my-2"
            value={this.state.judulInp}
            onChange={this.onInputChange}
          />
          <input
            name="captionInp"
            type="text"
            placeholder="Masukkan caption"
            className="form-control my-2"
            value={this.state.captionInp}
            onChange={this.onInputChange}
          />
        </ModalComp>
        <ModalComp
           isOpen={this.state.editmodal}
           toggle={this.toggleEdit}
           title={"Edit Data"}
           saveData={this.onEditSaveClick}
           Cancel={this.onEditCancelClick}
           Edit={true}
        >
          <input
            name="foto"
            type="text"
            placeholder="Alamat foto"
            className="form-control my-2"
            value={this.state.EditData.foto}
            onChange={this.onInputEditChange}
          />
          <input
            name="judul"
            type="text"
            placeholder="Masukkan judul"
            className="form-control my-2"
            value={this.state.EditData.judul}
            onChange={this.onInputEditChange}
          />
          <input
            name="caption"
            type="text"
            placeholder="Masukkan caption"
            className="form-control my-2"
            value={this.state.EditData.caption}
            onChange={this.onInputEditChange}
          />
        </ModalComp>
        <div className="row">{this.renderCard()}</div>
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center text-muted">
          <h1>ADD MENU</h1>
          <div>
            <button className="btn btn-success mx-2" onClick={this.onAddModalClick} >
              <BsPlusCircle style={{ fontSize: "3em", fontWeight: "700" }}/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home2);