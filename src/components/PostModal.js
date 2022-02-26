import React from 'react'
import styled from 'styled-components'

const PostModal = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="/images/close-icon.png" alt="" />
                    </button>
                </Header>

                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt='' />
                        <span>Name</span>
                    </UserInfo>
                </SharedContent>

                <ShareCreation>
                    <AttachAssets>
                        <AssetButton>
                            <img src='/images/share-image.svg' alt='' /> {/* #70b5f9 */}
                        </AssetButton>
                        <AssetButton>
                            <img src='/images/share-video.svg' alt='' /> {/* #7fc15e */}
                        </AssetButton>
                    </AttachAssets>

                    <ShareComment>
                        <AssetButton>
                            <img src="/images/share-comment.svg" alt='' />
                            Anyone
                        </AssetButton>

                    </ShareComment>
                    <PostButton>
                        Post
                    </PostButton>
                </ShareCreation>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0,0,0,0.8);
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction:column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div`
    display: block;
    padding:16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 15px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        img {
            max-width: 80%;
            max-height: 80%;
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent ;
    padding: 8px 12px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent ;
        border-radius: 50%;
    };
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0,0,0, 0.5);
    img {
        color: #70b5f9;
    }
`;

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    ${AssetButton}{
        svg {
            margin-right: 50px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: #0a66c2;
    color: white;
    &:hover {
        color:black;
    }
`;

export default PostModal;
