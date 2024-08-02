import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Widget = ({ type }) => {
  let data;

  //temporary
  // const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Amount Due",
        amount: "1,234",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              fontSize: '54px', 
               borderRadius: "4px"
              
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Customers",
        amount: "3,642",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              fontSize: '54px', 
               borderRadius: "4px"
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Invoices",
        amount: "1,021",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",fontSize: '54px', borderRadius: "4px" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Estimates",
        amount: "8943",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              fontSize: '54px', 
               borderRadius: "4px"
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
       <div className="right">
        <span className="widget_icon">{data.icon}</span>
        <div className="left">
        <div className="left_title">
        <span className="title">{data.title}</span>
        </div>
       <div className="left_amount"> 
       <span className="amount">{data.amount}</span>
       </div>
    
      </div>
      </div>


      <div  className="progress">
        <div className="progress-bar">
      <ProgressBar now={60} />;


        </div>

      </div>
     
      
    </div>
  );
};

export default Widget;