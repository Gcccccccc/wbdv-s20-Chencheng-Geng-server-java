(function () {
    let $usernameFld, $passwordFld;
    let $removeBtn, $editBtn, $createBtn, $updateBtn;
    let $firstNameFld, $lastNameFld, $roleFld;
    let $userRowTemplate, $tbody;
    let userService = new AdminUserServiceClient();
    let userList = []


    const createUser = () => {
        const newUser = {
            Username : $usernameFld.val(),
            Password : $passwordFld.val(),
            FirstName : $firstNameFld.val(),
            LastName : $lastNameFld.val(),
            Role : $roleFld.val()
        }
        userService.createUser(newUser)
            .then(brandNewUser => {
                findAllUsers()
                renderUsers((userList))
            })
    }

    const findAllUsers = () => {
        userService.findAllUsers()
            .then(t => {
                userList = t
                //console.log(userList)
                renderUsers(userList)
            })
    }
    const findUserById = () => {}
    const deleteUser = () => {

    }
    function selectUser() {}
    function updateUser() {}
    const renderUser = (user) => {

    }
    const renderUsers = (users) => {
        $tbody.empty();
        for(let i in users){
            let newRow = $("<tr></tr>")
            newRow.addClass("wbdv-template wbdv-user wbdv-hidden")
            let newUsername = $(`<td>${users[i].Username}</td>`)
            newUsername.addClass("wbdv-username")
            let newNbsp = $(`<td>&nbsp;</td>`)
            let newFirstName = $(`<td>${users[i].FirstName}</td>`)
            newFirstName.addClass("wbdv-first-name")
            let newLastName = $(`<td>${users[i].LastName}</td>`)
            newLastName.addClass("wbdv-last-name")
            let newRole = $(`<td>${users[i].Role}</td>`)
            newRole.addClass("wbdv-role")
            let newAction = $(`<td></td>`)
            newAction.addClass("wbdv-actions")
            let newSpan = $(`<span></span>`)
            newSpan.addClass("float-right")
            let newRemove = $(`<i id="wbdv-remove" class="fa-2x fa fa-times wbdv-remove"></i>`)
            let newEdit = $(`<i id="wbdv-edit" class="fa-2x fa fa-pencil wbdv-edit"></i>`)
            newSpan.append(newRemove)
            newSpan.append(newEdit)
            newAction.append(newSpan)
            newRow.append(newUsername)
            newRow.append(newNbsp)
            newRow.append(newFirstName)
            newRow.append(newLastName)
            newRow.append(newAction)
            $tbody.append(newRow)
            newRemove.click(deleteUser)
            newEdit.click(updateUser())
        }
    }
    findAllUsers()




    function main() {
        $usernameFld = $("#usernameFld")
        $passwordFld = $("#passwordFld")
        $createBtn = $("#creatBtn")
        $updateBtn = $("#updateBtn")
        $firstNameFld = $("#firstNameFld")
        $lastNameFld = $("#lastNameFld")
        $roleFld = $("#roleFld")
        $tbody = $("#tbody")
        $userRowTemplate = $("#userRowTemplate")
        $createBtn.click(createUser)
        $updateBtn.click(updateUser)
        // $userRowTemplate = $("<tr class="wbdv-template wbdv-user wbdv-hidden">")
    }
    $(main);
})();



