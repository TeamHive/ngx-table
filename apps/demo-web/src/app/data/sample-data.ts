import { TableData } from '../models/table-data.interface';

export namespace SampleTableData {
  export const data: TableData[] = [{
    id: 1,
    active: true,
    age: 30,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Scott',
    location: 'USA'
  }, {
    id: 2,
    active: false,
    age: 25,
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Bart',
    location: 'USA'
  }, {
    id: 3,
    active: true,
    age: 28,
    bio: 'Id velit ut tortor pretium. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dictum varius duis at consectetur lorem donec massa sapien.',
    name: 'Kara',
    location: 'Europe'
  }, {
    id: 4,
    active: true,
    age: 64,
    bio: 'Cras ornare arcu dui vivamus. Semper risus in hendrerit gravida rutrum quisque. Gravida dictum fusce ut placerat orci nulla. At auctor urna nunc id cursus metus. Aliquam purus sit amet luctus venenatis lectus magna.',
    name: 'Marcus',
    location: 'Romania'
  }];
}
