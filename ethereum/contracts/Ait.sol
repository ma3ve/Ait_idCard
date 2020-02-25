pragma solidity >=0.4.0 <0.6.0;

contract Ait {
    address public manager;
    struct Student {
        string name;
        uint32 rollno;
        string branch;
        string dob;
        string bloodGp;
        bool isStudent;
    }
    constructor() public {
        manager = msg.sender;
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    mapping(uint256 => Student) public student;
    function register(
        uint256 _regno,
        string memory _name,
        uint32 _rollno,
        string memory _branch,
        string memory _dob,
        string memory _bloodGp
    ) public restricted {
        student[_regno].name = _name;
        student[_regno].rollno = _rollno;
        student[_regno].branch = _branch;
        student[_regno].dob = _dob;
        student[_regno].bloodGp = _bloodGp;
        student[_regno].isStudent = true;
    }
    function changeName(string memory _name, uint256 _regno) public restricted {
        student[_regno].name = _name;
    }
    function changeRollno(uint32 _rollno, uint256 _regno) public restricted {
        student[_regno].rollno = _rollno;
    }
    function changeBranch(string memory _branch, uint256 _regno)
        public
        restricted
    {
        student[_regno].branch = _branch;
    }
    function changeDob(string memory _dob, uint256 _regno) public restricted {
        student[_regno].dob = _dob;
    }
    function changeBloodGp(string memory _bloodGp, uint256 _regno)
        public
        restricted
    {
        student[_regno].bloodGp = _bloodGp;
    }
    function left(uint256 _regno) public restricted {
        student[_regno].isStudent = false;
    }

}
