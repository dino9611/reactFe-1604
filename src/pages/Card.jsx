import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../components/MaterialUi";
import { BsPlusCircle } from "react-icons/bs";
import swal from 'sweetalert';
import Card from "./../components/Bcard";
import ModalComp from "./../components/Modal";
import { toast } from "react-toastify";

class Home2 extends Component {
  state = {
    data: [
      {
        foto:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        judul: "Salad Sayur",
        caption: "Makan teratur",
      },
      {
        foto:
          "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_potassium_foods_other.jpg?resize=750px:*",
        judul: "Salad Buah",
        caption: "Makan teratur",
      },
      {
        foto:
          "http://kbu-cdn.com/dk/wp-content/uploads/nasi-goreng-teri.jpg",
        judul: "Nasi Goreng",
        caption: "Makan teratur",
      },
      {
        foto:
          "http://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
        judul: "Mie Goreng",
        caption: "Makan teratur",
      },
    ],
    fotoInp: "",
    judulInp: "",
    captionInp: "",
    indexdelete: -1,
    indexedit: -1,
    EditData: {
      foto: "",
      judul: "",
      caption: ""
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
      let newdata = {
        foto: fotoInp,
        judul: judulInp,
        caption: captionInp,
      };
      let usersdata = data;
      usersdata.push(newdata);
      this.setState({
        data: usersdata,
        fotoInp: "",
        judulInp: "",
        captionInp: "",
        modal: false,
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

  // onDeleteClick = (index)=>{
  //   this.setState({indexdelete: index})
  // };
  
  onDeleteClick = (index) => {
    this.setState({ indexdelete: index });
    swal({
      title: "Anda yakin?",
      text: "Data akan dihapus permanen",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Data sudah dihapus", {
            icon: "success",
          });
          const { data, indexdelete } = this.state;
          let usersData = data;
          usersData.splice(indexdelete, 1);
          console.log(indexdelete)
          this.setState({ data: usersData, indexdelete: -1 });
        } else {
          swal("Tidak jadi dihapus.");
        }
      });
  };

  onEditClick = (index)=>{
    let EditData = this.state.EditData;
    let data = this.state.data;
    EditData = {
      ...EditData,
      foto: data[index].foto,
      judul: data[index].judul,
      caption: data[index].caption,
    };
    this.setState({indexedit: index, EditData: EditData, editmodal: true});
  }

  onEditSaveClick = () => {
    const { EditData, data, indexedit } = this.state;
    const { foto, judul, caption } = EditData;
    if (foto && judul && caption) {
      let dataEdit = {
        foto: foto,
        judul: judul,
        caption: caption,
      };
      let dataUser = data;
      dataUser.splice(indexedit, 1, dataEdit);
      this.setState({
        foto: dataUser,
        indexedit: -1,
        editmodal: false,
      })
    } else {
      this.setState({
        EditData: {
          foto: "",
          judul: "",
          caption: "",
        },
        indexedit: -1,
      })
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
    return this.state.data.map((val, index) => {
        return (
          <div className="col-md-3" key={index}>
            <Card foto={val.foto} judul={val.judul} caption={val.caption} 
            Delete={()=> this.onDeleteClick(index)} Edit={()=> this.onEditClick(index)}/>
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
           toggle={this.toggle}
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
            placeholder="Alamat foto"
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