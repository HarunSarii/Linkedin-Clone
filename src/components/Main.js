import React from "react";
import styled from "styled-components";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Main = () => {
    return (
        <Container>
            <ShareBox>
                Share
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <InsertPhotoOutlinedIcon className="icon" />
                        <span>Photo</span>
                    </button>

                    <button>
                        <OndemandVideoOutlinedIcon />
                        <span>Video</span>
                    </button>

                    <button>
                        <EventNoteOutlinedIcon />
                        <span>Event</span>
                    </button>

                    <button>
                        <ArticleOutlinedIcon />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a >
                            <MoreHorizIcon />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <MoreHorizIcon />
                        </button>
                    </SharedActor>
                </Article>
            </div>
        </Container>
    );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
      button {
          outline: none;
          color: rgba(0,0,0, 0.6);
          font-size: 14px;
          line-height: 1.5;
          min-height: 48px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          font-weight: 600;
        }

      
      &:first-child {
          display:flex;
          align-items: center;
          padding: 8px 16px 0px 16px;
          img {
              width: 48px;
              border-radius: 50%;
              margin-right: 8px;
          }
          button {
            margin: 4px 0;
            flex-grow: 1;
            padding-left: 16px;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 35px;
            background-color: white;
            text-align: left;
        }
      }
      &:nth-child(2) {
          display:flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding-bottom: 4px;

          button{
              &:first-child{
                  margin: 0 4px 0 -2px;

              }
              span {
                  color: #70b5f9;
              }
          }
      }

    }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`

const SharedActor = styled.div``
export default Main;
