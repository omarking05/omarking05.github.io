import React from "react"
import styled from 'styled-components';

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 0;
  font-size: 1.065rem;
`

const Skill = styled.div`
  color: #5badf0;
  line-height: 1.45;
`

const SkillSeparator = styled.div`
  &:after {
    content: "\\2219";
    padding: 0 .5rem;
  }
  font-weight: bolder;
  font-size: 35px;
  font-family: 'Lora',serif;
`
const SkillContainer = () => (
  <SkillWrapper>
      <Skill>
        <span style={{
          padding: `.065rem .375rem .125rem`,
          borderRadius: `1px`,
          background: `#c1e4ff`,
          color: `#091b33`
        }}>
          Doer
        </span>
      </Skill>
      <SkillSeparator />
      <Skill>
        <span style={{
          padding: `.065rem .375rem .125rem`,
          borderRadius: `1px`,
          background: `#c1e4ff`,
          color: `#091b33`
        }}>
          Gamer
        </span>
      </Skill>
      <SkillSeparator />
      <Skill>
        <span style={{
          padding: `.065rem .375rem .125rem`,
          borderRadius: `1px`,
          background: `#c1e4ff`,
          color: `#091b33`
        }}>
          Engineer
        </span>
      </Skill>
    </SkillWrapper>
)

export default SkillContainer;