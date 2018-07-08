import React from 'react'

const CreateDoc = () => (
  <div className="container">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Document Title</label>
        <input type="text" class="form-control" id="doctitle" placeholder="Enter Documet Title" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">File Type</label>
        <select class="form-control" id="filetype">
          <option>Javascript: === .js</option>
          <option>React: === .jsx</option>
          <option>Plaintext: ===.txt</option>
          <option>Markdown: === .md</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Select Users <span><em>Hold down cmd/ctrl to select multiple users</em></span></label>
        <select multiple class="form-control" id="sharedwith" rows="8">
          <option>Leo</option>
          <option>Loka</option>
          <option>Luna</option>
          <option>Wilbur</option>
          <option>Charlie</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Document Text</label>
        <textarea class="form-control" id="doc text" rows="9"></textarea>
      </div>
    </form>
  </div>
)

export default CreateDoc;