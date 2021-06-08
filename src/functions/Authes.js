export  function userRole() {
  const roles_h = {'admin':0,'owner':1,'manager':5,'staff':8,'cast':10}
  return localStorage.getItem('user') ?
    roles_h[JSON.parse(localStorage.getItem('user')).role] :
    100;
}

export function role_difference_contents(dom) {
  const role = userRole()
  console.log(role);
    return role < 8 ? dom : null
}
