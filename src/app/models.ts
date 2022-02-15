export interface Jobs{
    jobPostId:number,
    jobRole:string,
    jobDescription:	string,
    jobType	:string,
    jobDomain:string,
    jobCompensation:number
    jobOpenFor:string,
    jobLocation	:string,
    company	:string
  }
  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  