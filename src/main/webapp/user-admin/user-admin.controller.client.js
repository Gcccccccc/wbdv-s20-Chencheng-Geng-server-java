(function () {
    let $usernameFld, $passwordFld;
    let $createBtn, $updateBtn;
    let $firstNameFld, $lastNameFld, $roleFld;
    let $userRowTemplate, $tbody;
    let userService = new AdminUserServiceClient();
    let userList = []
    let $removeBtn
    let $editBtn
    let currentIndex = -1 // remember the current index of edit data
    const createUser = () => {
        currentIndex = -1
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

    const updateUser = () => {
        // if currentIndex != -1 which means after click editBtn userList index has been changed so don't update
        if(currentIndex != -1) {
            const _id = userList[currentIndex]._id
            const newUser = {
                Username: $usernameFld.val(),
                Password: $passwordFld.val(),
                FirstName: $firstNameFld.val(),
                LastName: $lastNameFld.val(),
                Role: $roleFld.val()
            }
            $usernameFld.val("")
            $passwordFld.val("")
            $firstNameFld.val("")
            $lastNameFld.val("")
            $roleFld.val("")
            userService.updateUser(_id, newUser)
                .then(newUser => {
                    findAllUsers()
                })
        }
    }

    const deleteUser = (index) => {
        currentIndex = -1
        let id = userList[index]._id
        userService.deleteUser(id)
            .then(response => {
                findAllUsers()
            })
    }

    const selectUser = (index) => {
        currentIndex = index
        let id = userList[index]._id
        findUserById(id)
            .then(ret_val => {
                //console.log(ret_val)
                $usernameFld.val(ret_val.Username)
                $passwordFld.val("******")
                $firstNameFld.val(ret_val.FirstName)
                $lastNameFld.val(ret_val.LastName)
                $roleFld.val(ret_val.Role)
            })
    }

    const renderUser = (user) => {
        $newRow = $userRowTemplate.clone()
        $newRow.attr("class","wbdv-user")
        $newRow.find(".wbdv-username").html(user.Username)
        $newRow.find(".wbdv-first-name").html(user.FirstName)
        $newRow.find(".wbdv-last-name").html(user.LastName)
        $newRow.find(".wbdv-role").html(user.Role)

        $removeBtn = $newRow.find(".wbdv-remove")
        $removeBtn.attr("id","wbdv-remove-" + user._id)

        $editBtn = $newRow.find(".wbdv-edit")
        $editBtn.attr("id","wbdv-edit-" + user._id)

        $tbody.append($newRow)

    }

    const renderUsers = (users) => {
        $tbody.empty();
        for(let i in users){
            renderUser(users[i])
            $removeBtn = $("#wbdv-remove-"+users[i]._id)
            $editBtn = $("#wbdv-edit-"+users[i]._id)

            $removeBtn.click(() =>{
                deleteUser(i)
            })

            $editBtn.click(() =>{
                selectUser(i)
            })
        }
    }
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
        $userRowTemplate = $(".wbdv-template")
    }
    $(main);
    findAllUsers()
})();



