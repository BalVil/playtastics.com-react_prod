import Cookies from 'js-cookie';

function GetCookies(cookiename) {
  return Cookies.get(cookiename);
}

function RemoveCookies(cookiename) {
  Cookies.remove(cookiename);
}

function SetCookies(cookiename, playtastics) {
  Cookies.set(cookiename, playtastics, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export { GetCookies, RemoveCookies, SetCookies };
