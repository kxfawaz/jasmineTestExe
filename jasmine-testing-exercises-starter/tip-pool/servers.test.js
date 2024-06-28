describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a servername to allServers on submitServerInfo() if input is empty',function(){
   serverNameInput.value = ''
   submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should make sure another Server name can be added and both servers have the same earnings',function(){

 serverNameInput.value = "Kent";
 submitServerInfo();

 let curTdList = document.querySelectorAll('#serverTable tbody tr td');
 expect(curTdList.length).toEqual(4);
 expect(curTdList[0].innerHTML).toEqual('Alice');
 expect(curTdList[1].innerHTML).toEqual('$0.00');
 expect(curTdList[2].innerHTML).toEqual('Kent')
 expect(curTdList[3].innerHTML).toEqual(curTdList[1].innerHTML)


  })

  afterEach(function() {
    // teardown logic
    // serverId = 0;
    // allServers = {};
    // serverTbody.innerHTML = '';
  });
});
