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
        throw Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object.name===user})===-1)
    {
        throw Error("There are no this object with this name!");
    }
    else
    {
        allUsers.splice(allUsers.findIndex(function(object) {return object.name===user}),1);
    }
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) 
{
    if(!user)
    {
        throw Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object.name===user})===-1)
    {
        throw Error("There are no this object with this name!");
    }
    else
    {
        return allUsers[allUsers.findIndex(function(object) {return object.name===user})].groups;
    }
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) 
{
    if(!user||!group)
    {
        throw Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object.name===user})===-1 || allGroups.findIndex(function(object) {return object.name===group})===-1)
    {
        throw Error("There are no this object with this name!");
    }
    else
    {
        allUsers[allUsers.findIndex(function(object) {return object.name===user})].groups.push(group);
    }
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) 
{
    if(!user||!group)
    {
        throw Error("Invalid syntax!");
    }
    else if(allUsers.findIndex(function(object) {return object.name===user})===-1 || allGroups.findIndex(function(object) {return object.name===group})===-1)
    {
        throw Error("There are no this user or this group!");
    }
    else if(allUsers[allUsers.findIndex(function(object) {return object.name===user})].groups.findIndex(function(object) {return object.name===group})===-1)
    {
        throw Error("There are no this user in this group!");
    }
    else
    {
        allUsers[allUsers.findIndex(function(object) {return object.name===user})].groups.splice(allUsers[allUsers.findIndex(function(object) {return object.name===user})].groups.findIndex(function(object) {return object.name===group}),1);
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
        throw Error("There are no this right with this name!");
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
    if(allGroups.findIndex(function(object) {return object.name===group})===-1)
    {
        throw Error("There are no this right with this name!");
    }
    else
    {
        allGroups.splice(allGroups.findIndex(function(object) {return object.name===group}),1);
    }
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(group) 
{
    if(allGroups.findIndex(function(object) {return object.name===group})===-1)
    {
        throw Error("There are no this right with this name!");
    }
    else
    {
        return allGroups[allGroups.findIndex(function(object) {return object.name===group})].rights;
    }
}

// Добавляет право right к группе group
function addRightToGroup(right,group) 
{
    if(allGroups.findIndex(function(object) {return object.name===group})===-1 || allRights.indexOf(right)===-1)
    {
        throw Error("There are no this right of group with this name!");
    }
    else
    {
        allGroups[allGroups.findIndex(function(object) {return object.name===group})].rights.push(right);
    }
}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(right,group) 
{
    if(!right||!group)
    {
        throw Error("Invalid syntax!");
    }
    else if(allGroups.findIndex(function(object) {return object.name===group})===-1 || allRights.indexOf(right)===-1)
    {
        throw Error("There are no this right or this group!");
    }
    else if(allGroups.findIndex(function(object) {return object.name===group}).rights.indexOf(right)===-1)
    {
        throw Error("There are no this right in this group!");
    }
    else
    {
        allGroups[allGroups.findIndex(function(object) {return object.name===group})].rights.splice(allGroups.findIndex(function(object) {return object.name===group}).rights.indexOf(right),1);
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
