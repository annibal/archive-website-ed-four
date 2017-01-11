Array.prototype.forEach = function(callback) {
    for (let obj of this) {
        callback(obj);
    }
}

Array.prototype.find = function(fnSearch) {
    for (let obj of this) {
        if (fnSearch(obj)) {
            return obj
        }
    }
    return null;
}

Array.prototype.findIndex = function(fnSearch) {
    var index = 0;
    for (let obj of this) {
        index++;
        if (fnSearch(obj)) {
            return index;
        }
    }
    return null;
}

function randomRange(minNum, maxNum) {
     return (Math.floor(Math.random() * (maxNum - minNum)) + minNum);
}

Array.prototype.shuffle = function(shuffleAmount) {
    if (shuffleAmount == null) shuffleAmount = 3;
    var auxLength = this.length;
    var toShuffle = JSON.parse(JSON.stringify(this));
    for (let j=0; j<shuffleAmount; j++) {
        var auxArr = [];
        for (let i=0; i<auxLength; i++) {
            auxArr.push(toShuffle.splice( randomRange(0, toShuffle.length), 1 )[0]);
        }
        toShuffle = auxArr;
    }
    return auxArr;
}


function makeRequest (opts) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}
