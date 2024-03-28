const GroupName = ['gender', 'season', 'style', 'price', 'color', 'fit']

//전달할 Object data
var SelectedGroup = {
    'gender': '',
    'season': '',
    'style': '',
    'price': '',
    'color': '',
    'fit': ''
}; //JS Object를 key:value로 저장하는 작업


var i = 0;
//static 변수로 선언, program scope

function getSelectedVal(event) {

    for (let i = 0; i < GroupName.length; i++) {
        let groupList = document.getElementsByName(GroupName[i]);
        groupList.forEach((item) => {
            if (item.checked) {
                SelectedGroup[GroupName[i]] = item.value;
                sessionStorage.setItem("SelectedGroup", JSON.stringify(SelectedGroup));
            }
        })
    }
    console.log(SelectedGroup);
}

