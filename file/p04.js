const user = { 

}

const updateUser = ( key , value) =>{
    user[key] = value;
}

onchange = {value : updateUser ('firtsname' , 'soheil')};
onchange = {value : updateUser ('lastname' , 'saedi')};
onchange = {value : updateUser ('age' , '21')};
onchange = {value : updateUser ('email' , 'soheil.saedi1379@gmail.com')};

console.log(user);