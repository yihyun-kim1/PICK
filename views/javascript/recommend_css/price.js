const GroupName =['gender','season','style','price','color','fit']
SelectedGroup = JSON.parse(sessionStorage.getItem("SelectedGroup"));

var i = 0;

function getSelectedVal(event)  {

    for(let i =0;i<GroupName.length;i++){
      let groupList = document.getElementsByName(GroupName[i]);
        groupList.forEach((item) => {
        if(item.checked)  {
          SelectedGroup[GroupName[i]] =item.value;
          sessionStorage.setItem("SelectedGroup", JSON.stringify(SelectedGroup));    
          }
    })
    }    
    console.log(SelectedGroup)
}
