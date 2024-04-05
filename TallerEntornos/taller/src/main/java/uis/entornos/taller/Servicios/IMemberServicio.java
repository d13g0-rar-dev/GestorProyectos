package uis.entornos.taller.Servicios;

import java.util.List;
import uis.entornos.taller.Modelos.Member;

public interface IMemberServicio {
    public List<Member> getMembers();
    public Member getMember(Integer id);
    public Member saveMember(Member member);
    public void deleteMember(Integer id);

}
