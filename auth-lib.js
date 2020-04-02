let allUsers = [];
let allGroups = [];//массив объектов {название группы, права}
let allRights = [];//массив прав

// Возвращает массив всех пользователей.
function users() 
{
    return allUsers;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password)
{
    let newUser = {
        name: name,
        password: password,
        groups: []
    }
    allUsers.push(newUser);
    return newUser;
}

// Удаляет пользователя user
function deleteUser(user) 
{
    if(!user)
    {
        throw new Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object===user})===-1)
    {
        throw new Error("There are no this object!");
    }
    else
    {
        allUsers.splice(allUsers.findIndex(function(object) {return object===user}),1);
    }
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) 
{
    if(!user)
    {
        throw new Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object===user})===-1)
    {
        throw new Error("There are no this object with this name!");
    }
    else
    {
        return user.groups;
    }
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) 
{
    if(!user)
    {
        throw new Error("Invalid syntax of username!");
    }
    else if(!group)
    {
        throw new Error("Invalid syntax of group!");
    }
    else if(allUsers.findIndex(function(object) {return object===user})===-1 || allGroups.findIndex(function(object) {return object===group})===-1)
    {
        throw new Error("There are no this object with this name!");
    }
    else
    {
        user.groups.push(group);
    }
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) 
{
    if(!user||!group)
    {
        throw new Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object===user})===-1)
    {
        throw new Error("There are no this user!");
    }
    else if(allGroups.findIndex(function(object) {return object===group})===-1)//в allGroups - объекты
    {
        throw new Error("There are no this group!");
    }
    else if(user.groups.indexOf(group)===-1) //у пользователей просто массив названий
    {
        throw new Error("There are no this user in this group!");
    }
    else
    {
        user.groups.splice(user.groups.indexOf(group),1);
    }
}

// Возвращает массив прав
function rights() 
{
    return allRights;
}

// Создает новое право с именем name и возвращает его
function createRight(name) 
{
    let newRight = name;
    allRights.push(newRight);
    return newRight;
}

// Удаляет право right
function deleteRight(right) 
{
    if(allRights.indexOf(right)===-1)
    {
        throw new Error("There are no this right with this name!");
    }
    else
    {
        allRights.splice(allRights.indexOf(right));
    }
}

// Возвращает массив групп
function groups() 
{
    return allGroups;
}

// Создает новую группу и возвращает её.
function createGroup(name) 
{
    let newGroup = {
        name: name,
        rights:[]
    }
    allGroups.push(newGroup);
    return newGroup;
}

// Удаляет группу group
function deleteGroup(group) 
{
    if(allGroups.findIndex(function(object) {return object===group})===-1)
    {
        throw new Error("There are no this group with this name!");
    }
    else
    {
        allGroups.splice(allGroups.findIndex(function(object) {return object===group}),1);
    }
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(group) 
{
    if(allGroups.findIndex(function(object) {return object===group})===-1)
    {
        throw new Error("There are no this group with this name!");
    }
    else
    {
        return allGroups[allGroups.findIndex(function(object) {return object===group})].rights;
    }
}

// Добавляет право right к группе group
function addRightToGroup(right,group) 
{
    if(allGroups.findIndex(function(object) {return object===group})===-1 || allRights.indexOf(right)===-1)
    {
        throw new Error("There are no this right or group with this name!");
    }
    else
    {
        group.rights.push(right);
    }
}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(right,group) 
{
    if(!right||!group)
    {
        throw new Error("Invalid syntax!");
    }
    else if(allGroups.findIndex(function(object) {return object===group})===-1 || allRights.indexOf(right)===-1)
    {
        throw new Error("There are no this right or this group!");
    }
    else if(group.rights.indexOf(right)===-1)
    {
        throw new Error("There are no this right in this group!");
    }
    else
    {
        group.rights.splice(group.rights.indexOf(right),1);
    }
}

function login(username, password) 
{

}

function currentUser() 
{

}

function logout() 
{

}

function isAuthorized(user, right) 
{

}
