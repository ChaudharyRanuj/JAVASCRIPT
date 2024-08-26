// FUNCTIONING OF PROMISES

class testingPromise {
  static STATUS_PENDING = "PENDING";
  static STATUS_RESOLVED = "RESOLVED";
  static STATUS_REJECTED = "REJECTED";
  rejected = "";
  fullfilled = "";

  constructor(request) {
    this.STATUS = this.STATUS_PENDING;
    this.promise(request);
  }

  then(response) {
    this.STATUS = this.STATUS_PENDING;
    return this.promise(response);
  }

  resolve(fullfilled) {
    if (this.STATUS === this.STATUS_PENDING) {
      this.STATUS = this.STATUS_RESOLVED;
      this.rejected = "";
      this.fullfilled = fullfilled;
    }
  }

  reject(rejectMessage) {
    if (this.STATUS === this.STATUS_PENDING) {
      this.STATUS = this.STATUS_REJECTED;
      this.rejected = rejectMessage;
    }
  }

  catch(failureCallback) {
    if (this.STATUS === this.STATUS_REJECTED) {
      failureCallback(this.rejected);
    }
  }

  promise(request) {
    request(this.resolve.bind(this), this.reject.bind(this));
    return this;
  }
}

const testPromise = new testingPromise((resolve, reject) => {});
