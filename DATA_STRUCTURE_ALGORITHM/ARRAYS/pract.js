class Promise {
  static STATUS_PENDING = "PENDING";
  static STATUS_RESOLVED = "RESOLVED";
  static STATUS_REJECTED = "REJECTED";
  errorMessage = "";
  construtor(request) {
    this.promise(request);
  }

  then(response) {
    if (this.STATUS !== this.STATUS_PENDING) {
      this.STATUS = this.STATUS_PENDING;
    }
    return this.promise(response);
  }

  resolve(result) {
    if (this.STATUS === this.STATUS_PENDING) {
      this.STATUS = this.STATUS_RESOLVED;
      return result;
    }
  }

  reject(rejectMessage) {
    if (this.STATUS === this.STATUS_PENDING) {
      this.STATUS = this.STATUS_REJECTED;
      this.errorMessage = rejectMessage;
      return rejectMessage;
    }
  }

  catch(failureCallback) {
    if (this.STATUS === this.STATUS_REJECTED) {
      failureCallback(this.errorMessage);
    }
  }

  promise(request) {
    const result = request(this.resolve, this.reject);
    if (this.STATUS === this.STATUS_PENDING) {
    } else if (this.STATUS === this.STATUS_RESOLVED) {
    } else if (this.STATUS === this.STATUS_REJECTED) {
      this.errorMessage = result;
    }
    return this;
  }
}

const testPromise = new Promise((resolve, reject) => {
  resolve("this promise is resolved");
});

console.log(testPromise);
