export const JUDGE_STATUS = {
  '-10': {
    name: 'Not submitted',
    short: 'NS',
    color: 'gray',
    type: 'info',
    rgb:'#909399'
  },
  '-3': {
    name: 'Presentation Error',
    short: 'PE',
    color: 'yellow',
    type: 'warning',
    rgb:'#f90'
  },
  '-2': {
    name: 'Compile Error',
    short: 'CE',
    color: 'yellow',
    type: 'warning',
    rgb:'#f90'
  },
  '-1': {
    name: 'Wrong Answer',
    short: 'WA',
    color: 'red',
    type: 'error',
    rgb:'#ed3f14'
  },
  '0': {
    name: 'Accepted',
    short: 'AC',
    color: 'green',
    type: 'success',
    rgb:'#19be6b'
  },
  '1': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: 'red',
    type: 'error',
    rgb:'#ed3f14'
  },
  '2': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: 'red',
    type: 'error',
    rgb:'#ed3f14'
  },
  '3': {
    name: 'Memory Limit Exceeded',
    short: 'MLE',
    color: 'red',
    type: 'error',
    rgb:'#ed3f14'
  },
  '4': {
    name: 'Runtime Error',
    short: 'RE',
    color: 'red',
    type: 'error',
    rgb:'#ed3f14'
  },
  '5': {
    name: 'System Error',
    short: 'SE',
    color: 'gray',
    type: 'info',
    rgb:'#909399'
  },
  '6': {
    name: 'Pending',
    color: 'yellow',
    type: 'warning',
    rgb:'#f90'
  },
  '7': {
    name: 'Judging',
    color: 'blue',
    type: '',
    rgb:'#2d8cf0'
  },
  '8': {
    name: 'Partial Accepted',
    short: 'PAC',
    color: 'blue',
    type: '',
    rgb:'#2d8cf0'
  },
  '9': {
    name: 'Submitting',
    color: 'yellow',
    type: 'warning',
    rgb:'#f90'
  }
}

export const PROBLEM_LEVEL={
  '0':{
    name:'Easy',
    color:'green'
  },
  '1':{
    name:'Mid',
    color:'blue'
  },
  '2':{
    name:'Hard',
    color:'red'
  }
}

export const CONTEST_STATUS = {
  'SCHEDULED': '1',
  'RUNNING': '0',
  'ENDED': '-1'
}

export const CONTEST_STATUS_REVERSE = {
  '1': {
    name: 'Scheduled',
    color: '#f90'
  },
  '0': {
    name: 'Running',
    color: '#19be6b'
  },
  '-1': {
    name: 'Ended',
    color: '#ed3f14'
  }
}

export const RULE_TYPE = {
  ACM: 'ACM',
  OI: 'OI'
}

export const CONTEST_TYPE_REVERSE = {
  '0': {
    name:'Public',
    color:'success',
    tips:'公开赛，每个用户都可查看与提交',
    submit:true,              // 公开赛可看可提交
    look:true,
  },
  '1':{
    name:'Private',
    color:'danger',
    tips:'私有赛，需要密码才可查看与提交',
    submit:false,         // 私有赛 必须要密码才能看和提交
    look:false,
  },
  '2':{
    name:'Protect',
    color:'warning',
    tips:'保护赛，每个用户都可查看，提交需要密码',
    submit:false,       //保护赛，可以看但是不能提交，提交需要附带比赛密码
    look:true,
  }
}

export const CONTEST_TYPE = {
  PUBLIC: 'Public',
  PRIVATE: 'Password Protected',
  PROTECT: 'Submit Protected'
}

export const USER_TYPE = {
  REGULAR_USER: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'root'
}

export const PROBLEM_PERMISSION = {
  NONE: 'None',
  OWN: 'Own',
  ALL: 'All'
}

export const STORAGE_KEY = {
  AUTHED: 'authed',
  PROBLEM_CODE: 'problemCode',
  languages: 'languages'
}

export function buildProblemCodeKey (problemID, contestID = null) {
  if (contestID) {
    return `${STORAGE_KEY.PROBLEM_CODE}_${contestID}_${problemID}`
  }
  return `${STORAGE_KEY.PROBLEM_CODE}_NaN_${problemID}`
}

