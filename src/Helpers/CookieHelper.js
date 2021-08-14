export function addCke(name, value, days) {
  if (typeof document !== 'undefined') {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toGMTString()}`;
    }
    const cookie = [name, '=', value, '; domain_.', window.location.host.toString(), expires, '; path=/;'].join('');
    document.cookie = cookie;
  }
}

export function getParseCke(name, cookie) {
  let result = null;
  if (cookie !== undefined) {
    result = cookie.match(new RegExp(`${name}=([^;]+)`));
    result = result != null ? result[1] : null;
  }
  return result;
}

export function getCke(name) {
  let result = null;
  if (typeof document !== 'undefined') {
    result = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    result = result != null ? result[1] : result;
  }
  return result;
}

export function delCke(name) {
  if (typeof document !== 'undefined') {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.', window.location.host.toString()].join('');
  }
}

export function delAllCke() {
  if (typeof document !== 'undefined') {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  }
}
