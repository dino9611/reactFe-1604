import React, {Component} from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class Home extends Component{
    state={};

    render(){
        return (
          <div>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>
                  Tugas Abdurrahman Alghifari
                </ToastHeader>
                <ToastBody>
                  Welcome!
                </ToastBody>
              </Toast>
            </div>
          </div>
        )
    }
}

export default Home;