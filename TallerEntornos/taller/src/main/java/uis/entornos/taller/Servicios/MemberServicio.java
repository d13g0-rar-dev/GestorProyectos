package uis.entornos.taller.Servicios;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.entornos.taller.Modelos.Member;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Repositorios.MemberRepositorio;

@Service
@Transactional
public class MemberServicio implements IMemberServicio {
  @Autowired
  private MemberRepositorio memberRepo;

    @Override
    public List<Member> getMembers() {
        return memberRepo.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public Member getMember(Integer id) {
        return memberRepo.findById(id).orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public Member saveMember(Member member) {
        return memberRepo.save(member);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteMember(Integer id) {
        memberRepo.deleteById(id);
    }
}
