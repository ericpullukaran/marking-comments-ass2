import React from "react";
import "../../App.css";
import { Typography } from "@mui/material";

const Scripts = () => {
  return (
    <div>
      <header>
        <Typography variant="h3" className="App-header">
          Getting Scripts!
        </Typography>
      </header>
      <div>
        <Typography variant="h5" align="left">
          Assignment 4
        </Typography>
        <Typography variant="body1" align="left">
          This is for cloning and installing all the dependencies in the
          frontend and backend folder.
        </Typography>
        <Typography variant="h6" align="left">
          How to Use
        </Typography>
        <Typography variant="body1" align="left">
          <ol>
            <li>
              Create a file called groups.txt in the same directory as the
              script. An example file is provided below.
            </li>
            <li>
              The way to use the script is to directly highlight over all the
              groups that you need to mark in google sheets, copy the group
              names by CTRL + C or CMD + C, then paste it directly into
              groups.txt.
            </li>
            <li>
              Then in bash run the command ./setup.sh and wait a considerable
              amount of time (~15 - 20 mins) while your repos are automatically
              cloned, installed and stored in folders with the same name as the
              group.
            </li>
          </ol>
        </Typography>
        <div>
          <Typography variant="h6" align="left">
            <b>setup.sh</b>
          </Typography>
          <pre>
            <code lang="bash">
              #!/bin/bash <br />
              for n in $(cat groups.txt) <br />
              do <br />
              &#8195; git clone <br />
              &#8195;
              gitlab@gitlab.cse.unsw.EDU.AU:COMP6080/23T1/groups/$n/bigbrain.git
              $n <br />
              &#8195; cd $n/frontend <br />
              &#8195; npm install <br />
              &#8195; cd ../backend <br />
              &#8195; npm install <br />
              &#8195; cd ../..
              <br />
              done <br />
            </code>
          </pre>
          <Typography variant="h6" align="left">
            <b>groups.txt</b>
          </Typography>
          <pre>
            <code lang="bash">
              ASS4HELLOTHERE ASS4HAVERSACK ASS4HOCUSPOCUS ...
            </code>
          </pre>
        </div>
      </div>

      <div>
        <Typography variant="h5" align="left">
          Exam Marking
        </Typography>
        <Typography variant="body1" align="left">
          Since you're given a zip of every student, this is for removing all
          the directories that you aren't marking.
        </Typography>
        <Typography variant="h6" align="left">
          How to Use
        </Typography>
        <Typography variant="body1" align="left">
          <ol>
            <li>
              Just highlight all the zids in the google spreadsheet that you're
              marking and paste it into zids.txt. An example of this file is
              provided below.
            </li>
          </ol>
        </Typography>
        <div>
          <Typography variant="h6" align="left">
            <b>remove_zids.py</b>
          </Typography>
          <pre>
            <code lang="py">
              import shutil import os <br />
              import sys <br />
              import re <br />
              with open("./zids.txt", "r") as f: <br />
              &#8195;zids = f.read() <br />
              if zids is None: <br />
              &#8195;print("zids.txt has no zids") <br />
              &#8195;sys.exit() <br />
              zids = re.split("\t|\n|\s", zids) <br />
              existing_zids = set() <br />
              for zid in zids: <br />
              &#8195;existing_zids.add(zid) <br />
              for file in os.listdir("."): <br />
              &#8195;should_delete = file.isdigit() and not file in
              existing_zids
              <br />
              &#8195;if should_delete and os.path.isdir(f"./&#123;file&#125;"):{" "}
              <br />
              &#8195;&#8195;shutil.rmtree(f"./&#123;file&#125;",
              ignore_errors=True) <br />
            </code>
          </pre>
          <Typography variant="h6" align="left">
            <b>zids.txt</b>
          </Typography>
          <pre>
            <code lang="bash">5359661 5208823 5330634 ...</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Scripts;
