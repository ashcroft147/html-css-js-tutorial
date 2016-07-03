

function UserException(message) {
   this.name = "UserException";
   this.message = message;
}

function getMonthName(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      //throw new UserException("InvalidMonthNo");
      throw "Error";
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   monthName = getMonthName(myMonth);
} catch (e) {
   monthName = "unknown";
   console.log(e.name + ': "' + e.message + '"');
} finally {
    console.log("Exception test is ended");
}