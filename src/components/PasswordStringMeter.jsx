import React from "react";
import zxcvbn from "zxcvbn";
function PasswordStrengthMeter({ password }) {
  const paswordScore = zxcvbn(password).score;
  const num = (paswordScore * 100) / 4;

  const functionProgressColor = () => {
    switch (paswordScore) {
      case 0:
        return {color : "#818181" , title: "خیلی ضعیف" };
      case 1:
        return {color : "#ea1111" , title: "ضعیف" };
      case 2:
        return {color : "#ffad00" , title : "متوسط"};
      case 3:
        return {color :"#9bc158" , title : 'خوب'};
      case 4:
        return {color : "#00b500" , title : "عالی"};
      default:
        return {color : "#818181" , title: "خیلی ضعیف" };
    }
  };

  const {color , title} = functionProgressColor()

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: color ,
    height: "7px",
  });

  return (
    <div>
      <div className="progress" style={{ height: "7px" }}>
        <div
          style={changePasswordColor()}
          className="progress-bar"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{ color: color }}>{title}</p>
    </div>
  );
}

export default PasswordStrengthMeter;
