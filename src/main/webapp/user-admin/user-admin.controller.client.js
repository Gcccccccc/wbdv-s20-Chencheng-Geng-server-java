(function () {
    let $usernameFld, $passwordFld;
    let $createBtn, $updateBtn;
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
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")

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

    const findUserById = (id) => {
        return userService.findUserById(id)

    }

    const updateUser = (index) => {

    }

    const deleteUser = (index) => {
        const user = userList[index]
        const user_id = user._id
        userService.deleteUser(user_id)
            .then(response => {
                findAllUsers()
            })
    }

    const renderUser = (index) => {
        const user = userList[index]
        const user_id = user._id
        findUserById(user_id)
            .then(ret_val => {
                //console.log(ret_val)
                $usernameFld.val(ret_val.Username)
                $passwordFld.val("******")
                $firstNameFld.val(ret_val.FirstName)
                $lastNameFld.val(ret_val.LastName)
                $roleFld.val(ret_val.Role)
            })
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
            let $removeBtn = $(`<i id="wbdv-remove" class="fa-2x fa fa-times wbdv-remove btn"></i>`)
            let $editBtn = $(`<i id="wbdv-edit" class="fa-2x fa fa-pencil wbdv-edit btn"></i>`)
            newSpan.append($removeBtn)
            newSpan.append($editBtn)
            newAction.append(newSpan)
            newRow.append(newUsername)
            newRow.append(newNbsp)
            newRow.append(newFirstName)
            newRow.append(newLastName)
            newRow.append(newRole)
            newRow.append(newAction)
            $tbody.append(newRow)

            $removeBtn.click(()=>{
                deleteUser(i)
            })
            $editBtn.click(()=>{
                renderUser(i)
            })
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



