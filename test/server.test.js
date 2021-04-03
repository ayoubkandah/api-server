`use strict`
const {server}= require("../src/server")
const superGoose=require("@code-fellows/supergoose")
const request=superGoose(server)
const obj = {name: 'test'}
let id;
describe('Server TEST', () => {
    it("not Found route",async()=>{
        const response=await request.get("/notfound")
        expect(response.status).toEqual(404)
    })
    it("Bad Method",async()=>{
        const response=await request.patch("/food")
        expect(response.status).toEqual(404)
    })

  it('POST TEST', async () => {
   
    const response = await request.post('/food').send(obj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    id = response.body._id;
  });
  it('UPDATE TEST', async () => {
    const response = await request.put(`/food/${id}`).send({
      name: 'test123',});
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test123');
  });
  it("GET ARRAY TEST",async()=>{
    const response=await request.get("/food")
    // console.log(response.body,"ssssssssssssssssssssssssssssssssssssssssss")
    expect(response.status).toEqual(200)
// console.log(response.body,"sssssss")
    expect(response.body).toEqual( 
      [
         { _id: id , name: 'test123', __v: 0 } 
      ]
      )
})
  it('by ID', async () => {
    const response = await request.get(`/food/${id}`);
    // console.log(response.body.test,"222222222111111111sssssssssss");
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test123');
  });
  it("DELETE TEST",async ()=>{
    const response=await request.delete(`/food/${id}`)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual([])
    
    })
    it('POST TEST', async () => {
   
        const response = await request.post('/clothes').send(obj);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
        id = response.body._id;
      });
      it('UPDATE TEST', async () => {
        const response = await request.put(`/clothes/${id}`).send({
          name: 'test123',});
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test123');
      });
      it('by ID', async () => {
        const response = await request.get(`/clothes/${id}`);
        // console.log(response.body.test,"222222222111111111sssssssssss");
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test123');
      });
      it("GET ARRAY TEST",async()=>{
        const response=await request.get("/clothes")
        // console.log(response.body,"ssssssssssssssssssssssssssssssssssssssssss")
        expect(response.status).toEqual(200)
    // console.log(response.body,"sssssss")
        expect(response.body).toEqual( 
          [
             { _id: id , name: 'test123', __v: 0 } 
          ]
          )
    })
      it("DELETE TEST",async ()=>{
        const response=await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(200)
        expect(response.body).toEqual([])
        
        })
     
});