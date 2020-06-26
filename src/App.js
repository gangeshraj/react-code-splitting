import React,{Component} from 'react';
import axios from 'axios';
import styled from 'styled-components'


const FullPage= styled.div`
  /* This renders the buttons above... Edit me! */
  background-color:white;
  margin:0px;
  padding:0px;
  border:0px;
  display:flex;
  flex-direction:column;
  padding:50px;
  @media (max-width:600px){
    flex-direction:row;
    div{
      min-height:
    }
  }
`

const LeftSide= styled.div`
  /* This renders the buttons above... Edit me! */
  width:30%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  div{
    margin-bottom:10px;
    text-align:center;
  }

`


const RightSide= styled.div`
  /* This renders the buttons above... Edit me! */
  width:68%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  div{
    margin-bottom:10px;
    text-align:center;
    color:grey;
  }

`

const RightSideRepo= styled.div`
  /* This renders the buttons above... Edit me! */
  min-height:100px;
  borderTop:1px solid #e1e4e8;
  borderBottom:1px solid #e1e4e8;
  display:flex;
  flex-direction:column;
`

class App extends Component {

  constructor() {
    // Required step: always call the parent class' constructor
    super();
    this.state={
      userData:null,
      userRepo:null
    }
  }



  componentDidMount(){
    axios.get('https://api.github.com/users/supreetsingh247')
    .then(({data})=>{
      this.setState({userData:data})
    })
    axios.get('https://api.github.com/users/supreetsingh247/repos')
    .then(({data})=>{
      this.setState({userRepo:data})
    })
    console.log(this.state)
  }




  render(){
    if(!this.state.userData || !this.state.userRepo)
    return <div>loading</div>;
      return <FullPage>
          <LeftSide>
            <div><img style={{height:'260px',width:'260px',borderRadius:'50%'}} src={this.state.userData.avatar_url}/></div>
            <div style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>{this.state.userData.name}</div>
            <div style={{fontSize:'15px',color:'white',marginBottom:'8px'}}>{this.state.userData.login}</div>
            <div style={{fontSize:'30px',color:'black'}}>{this.state.userData.bio}</div>
            <div style={{fontSize:'30px',color:'black',margin:'auto',backgroundColor:'white',height:'40px',width:'100px',borderRadius:'4px',borderColor:'black',borderWidth:'1px'}}>{'follow'}</div>
            <div style={{fontSize:'30px',}}>{this.state.userData.company}</div>
            <div style={{fontSize:'30px',}}>{this.state.userData.name}</div>
          </LeftSide>
          <RightSide>
            <div>{this.state.userRepo.map((repo)=>{
              console.log(repo);
              return <div key={repo}><RightSideRepo>
                <div>{this.state.userRepo.description}</div>
                <div>Please note api Quota exceeded during test I reached till here</div>
              </RightSideRepo>
              </div>
            })}</div>
          </RightSide>
          </FullPage>
    }
}

export default App;
